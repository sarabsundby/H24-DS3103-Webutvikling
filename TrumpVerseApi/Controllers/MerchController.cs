// Imports
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrumpVerseApi.Contexts;
using TrumpVerseApi.Models;

// Exports
namespace TrumpVerseApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MerchController : ControllerBase
{
    private readonly TrumpVerseContext _trumpVerseContext;

    public MerchController(TrumpVerseContext merchContext)
    {
        _trumpVerseContext = merchContext;
    }

    [HttpGet]
    public async Task<ActionResult<List<Merch>>> Get()
    {
        try
        {
            List<Merch> merch = await _trumpVerseContext.Merch.ToListAsync();
            return Ok(merch);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Merch?>> Get(int id)
    {
        try
        {
            Merch? merch = await _trumpVerseContext.Merch.FindAsync(id);
            return merch;
        }
        catch
        {
            return StatusCode(StatusCodes.Status404NotFound);
        }
    }

    [HttpGet("type/{type}")]
    public async Task<ActionResult<List<Merch>>> GetByType(string type)
    {
        try
        {
            var filteredMerch = await _trumpVerseContext.Merch
                .Where(m => m.Type.ToLower() == type.ToLower())
                .ToListAsync();
            return Ok(filteredMerch);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet("types")]
    public async Task<ActionResult<List<string>>> GetTypes()
    {
        try
        {
            var types = await _trumpVerseContext.Merch
                .Select(m => m.Type)
                .Distinct()
                .ToListAsync();
            return Ok(types);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Merch>> Post(Merch newMerch)
    {
        try
        {
            _trumpVerseContext.Merch.Add(newMerch);
            await _trumpVerseContext.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = newMerch.Id }, newMerch);
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpPut]
    public async Task<ActionResult<Merch>> Put(Merch updatedMerch)
    {
        try
        {
            _trumpVerseContext.Entry(updatedMerch).State = EntityState.Modified;
            await _trumpVerseContext.SaveChangesAsync();
            return updatedMerch;
        }
        catch
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Merch>> Delete(int id)
    {
        Merch? deleteMerch = await _trumpVerseContext.Merch.FindAsync(id);
        if(deleteMerch != null)
        {
            _trumpVerseContext.Merch.Remove(deleteMerch);
            await _trumpVerseContext.SaveChangesAsync();
            return deleteMerch;
        }
        else
        {
            return NotFound();
        }
    }
}
