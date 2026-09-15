// Imports
using Microsoft.AspNetCore.Mvc;

// Exports
namespace TrumpVerseApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ImageUploadController : ControllerBase
    {    
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ImageUploadController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        [HttpPost]
        public async Task<IActionResult> Post(IFormFile file)
        {
            try
            {
                string webRootPath = _webHostEnvironment.WebRootPath;
                string absolutePath = Path.Combine(webRootPath, "images", file.FileName);

                using (var fileStream = new FileStream(absolutePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }

                return CreatedAtAction(nameof(Post), new { fileName = file.FileName });
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
