using MimeKit;
using MailKit.Net.Smtp;
using System.Threading.Tasks;
using gkinfinity.Models;
using MailKit;
using Microsoft.AspNetCore.Hosting.Server;
using System.Web;
using MailKit.Security;

namespace gkinfinity.Services
{
    public class MailSendRequest
    {
        public async Task SendEmailAsync(string subject, SendRequestModel sendRequest)
        {
            using var emailMessage = new MimeMessage();

            emailMessage.From.Add(new MailboxAddress("Заявки gkinfinity", "Gkinfinity@mail.ru"));
            emailMessage.To.Add(new MailboxAddress("", "Gkinfinity@mail.ru"));
            emailMessage.Subject = $"Заявка по франшизе {subject}";
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = $"<h1><b>Заявка по франшизе {subject}</b></h1></br></br><div><b>Имя:</b> {sendRequest.Name}</br><b>Телефон:</b> {sendRequest.PhoneNumber}</br><b>Город:</b> {sendRequest.City}</div>"
            };

            using (var client = new SmtpClient(new ProtocolLogger("log.log")))
            {
                await client.ConnectAsync("smtp.mail.ru", 25, false);
                await client.AuthenticateAsync("Gkinfinity@mail.ru", "a0upaTbg2egcEAdduFR5");
                await client.SendAsync(emailMessage);

                await client.DisconnectAsync(true);
            }
        }

    }
}
