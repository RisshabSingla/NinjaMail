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

    await sendEmail(subject, htmlContent, "devansh31shah@gmail.com");
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error fetching form:', error);
  }
}

async function sendEmail(subject: string, htmlContent: string, recipient: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Replace with your SMTP server host
    port: 465,
    secure: true,
    auth: {
      user: 'shivamdave2903@gmail.com', // Replace with your email address
      pass: 'nwes pwdc xdwx ozno', // Replace with your password (consider using environment variables)
    },
  });

  const info = await transporter.sendMail({
    from: 'shivamdave2903@gmail.com', // Replace with your email address
    to: recipient,
    subject: subject,
    html: htmlContent,
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
    contentString = ''; // Handle parsing errors appropriately
  }

  // Replace with your desired background color (e.g., '#f5f5f5')
  const backgroundColor = '#f5f5f5';

  const formattedContent = `${salutation ? `${salutation},\n` : ''}${subject}`;

  const htmlContent = `
    <div style="background-color: ${backgroundColor}; padding: 20px;">
      <p>${formattedContent}</p>
      <p>${contentString}</p>
    </div>
  `;

  return { subject: formattedContent, htmlContent: htmlContent };
}

export default FormDetailPage;
