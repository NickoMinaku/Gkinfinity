using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using gkinfinity.Models;

namespace gkinfinity.Services
{
    public class MailSendRequest
    {
        public async Task SendEmailAsync(string subject, SendRequestModel sendRequest)
        {
            using var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Заявки gkinfinity", "trueshchev@mail.ru"));
            emailMessage.To.Add(new MailboxAddress("", "trueshchev@mail.ru"));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = $"<div>Имя:{sendRequest.Name}</br>Телефон:{sendRequest.PhoneNumber}</br>Город:{sendRequest.City}</div>"
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync("smtp.mail.ru", 465, true);
                await client.AuthenticateAsync("trueshchev@mail.ru", "Zdt3AtwcVK9CKcC2mE5n");
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }
        }

    }
}
