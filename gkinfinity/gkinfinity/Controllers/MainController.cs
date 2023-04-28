﻿using gkinfinity.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using gkinfinity.Services;

namespace gkinfinity.Controllers
{
    public class MainController : Controller
    {
        private readonly ILogger<MainController> _logger;

        public MainController(ILogger<MainController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SemkiITochka()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> SendRequest(SendRequestModel sendrequest, string subject)
        {
            MailSendRequest sendRequest = new MailSendRequest();
            await sendRequest.SendEmailAsync(subject, sendrequest);
            return RedirectToAction("SemkiITochka");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}