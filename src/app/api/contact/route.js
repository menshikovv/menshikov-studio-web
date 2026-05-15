import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, contact, services, budget, description } = await request.json();

    if (!name || !contact) {
      return Response.json({ error: 'Name and contact are required' }, { status: 400 });
    }

    const servicesList = services?.length > 0 ? services.join(', ') : 'Не указано';

    await resend.emails.send({
      from: 'Studio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      subject: `Новая заявка от ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="margin: 0 0 24px; font-size: 22px;">Новая заявка с сайта</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 140px;">Имя</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Контакт</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Услуги</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${servicesList}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Бюджет</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${budget || 'Не указан'}</td>
            </tr>
            ${description ? `
            <tr>
              <td style="padding: 10px 0; color: #666; vertical-align: top;">О проекте</td>
              <td style="padding: 10px 0;">${description.replace(/\n/g, '<br>')}</td>
            </tr>
            ` : ''}
          </table>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
