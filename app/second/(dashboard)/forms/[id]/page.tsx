import { GetFormById } from '@/actions/form';
const nodemailer = require('nodemailer');


type Form = {
  userId: string;
  published: boolean;
  name: string;
  description: string;
  content: string;
  visits: number;
  submissions: number;
  shareURL: string;
};

async function FormDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  if (!id || typeof id !== 'string') {
    throw new Error('Invalid form ID: must be a string');
  }

  try {
    const form: Form | null = await GetFormById(Number(id));

    if (!form) {
      throw new Error('Form not found');
    }

    const { subject, htmlContent } = extractContent(form);

    await sendEmail(subject, htmlContent, [
      'azure@example.com',
      'vauxoo@yourcompany.example.com',
      'brandon.freeman55@example.com',
      'devansh31shah@gmail.com'
    ]);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error fetching form:', error);
  }
}

async function sendEmail(subject: string, htmlContent: string, recipient: string[]) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server host
    port: 465,
    secure: true,
    auth: {
      user: 'shivamdave2903@gmail.com', // Replace with your email address
      pass: 'nwes pwdc xdwx ozno', // Replace with your password (consider using environment variables)
    },
  });
  const messageId = Math.random().toString(36).substring(7);

  const info = await transporter.sendMail({
    from: 'shivamdave2903@gmail.com', // Replace with your email address
    to: recipient.join(','), // Join the array of recipients with commas
    subject: subject,
    html: htmlContent,
    dsn: {
      id: messageId, // Use the generated message ID
      return: 'headers',
      notify: ['success', 'failure', 'delay'], 
      recipient: 'shivamdave2903@gmail.com' // Sender's email for notification
    }
  });
  console.log('Email sent:', info.messageId); // Log successful email sending
}

function extractContent(formData: Form): { subject: string; htmlContent: string } {
  let contentString = '';
  let subject = '';
  let salutation = '';

  try {
    const contentArray = JSON.parse(formData.content);
    contentArray.forEach((element) => {
      if (element.type === 'TitleField' && element.extraAttributes) {
        subject = element.extraAttributes.title || ''; // Handle potential undefined values
      } else if (element.type === 'SubTitleField' && element.extraAttributes) {
        salutation = element.extraAttributes.title || ''; // Handle potential undefined values
      } else if (element.type === 'ParagraphField' && element.extraAttributes) {
        contentString += `${element.extraAttributes.text || ''}\n`; // Add body text with newline
      }
    });
  } catch (error) {
    console.error('Error parsing content:', error);
    contentString = ''; 
  }

  const backgroundColor = '#f5f5f5';

  const formattedContent = `${salutation ? `${salutation},\n` : ''}${subject}`;

  const htmlContent = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ccc; border-radius: 5px;">
    <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
      ${salutation && `<p style="font-size: 16px; margin-bottom: 10px;">${salutation}</p>`}
      ${subject && `<h2 style="font-size: 24px; margin-bottom: 20px;">${subject}</h2>`}
      ${contentString && `<p style="font-size: 16px;">${contentString}</p>`}
    </div>
  </div>
`;


  return { subject: formattedContent, htmlContent: htmlContent };
}

export default FormDetailPage;
