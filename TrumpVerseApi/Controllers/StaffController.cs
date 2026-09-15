// Imports
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrumpVerseApi.Contexts;
using TrumpVerseApi.Models;

// Exports
namespace TrumpVerseApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StaffController : ControllerBase
{
    private readonly TrumpVerseContext _trumpVerseContext;

    public StaffController(TrumpVerseContext staffContext)
    {
        _trumpVerseContext = staffContext;
    }

    [HttpGet]
    public async Task<ActionResult<List<Staff>>> Get()
    {
        try
        {
            List<Staff> staff = await _trumpVerseContext.Staff.ToListAsync();
            return Ok(staff);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Staff?>> Get(int id)
    {
        try
        {
            Staff? staff = await _trumpVerseContext.Staff.FindAsync(id);
            return staff;
        }
        catch
        {
            return StatusCode(StatusCodes.Status404NotFound);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Staff>> Post(Staff newStaff)
    {
        try
        {
            _trumpVerseContext.Staff.Add(newStaff);
            await _trumpVerseContext.SaveChangesAsync();
            return Created();
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPut]
    public async Task<ActionResult<Staff>> Put(Staff updatedStaff)
    {
        try
        {
            _trumpVerseContext.Entry(updatedStaff).State = EntityState.Modified;
            await _trumpVerseContext.SaveChangesAsync();
            return updatedStaff;
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Staff>> Delete(int id)
    {
        Staff? deleteStaff = await _trumpVerseContext.Staff.FindAsync(id);
        if(deleteStaff != null)
        {
            _trumpVerseContext.Staff.Remove(deleteStaff);
            await _trumpVerseContext.SaveChangesAsync();
            return deleteStaff;
        }
        else
        {
            return NotFound();
        }
    }
}