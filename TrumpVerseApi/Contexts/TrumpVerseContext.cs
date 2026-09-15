// Imports
using Microsoft.EntityFrameworkCore;
using TrumpVerseApi.Models;

// Exports
namespace TrumpVerseApi.Contexts;

public class TrumpVerseContext : DbContext
{
    public TrumpVerseContext(DbContextOptions<TrumpVerseContext> options):base(options){}

    // Tables
    public DbSet<Merch> Merch {get; set;}
    public DbSet<Staff> Staff {get; set;}
}