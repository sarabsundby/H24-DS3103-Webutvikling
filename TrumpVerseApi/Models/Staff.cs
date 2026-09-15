// Imports
using TrumpVerseApi.Interfaces;

// Exports
namespace TrumpVerseApi.Models;

public class Staff : IStaff
{
    public int Id {get; set;}
    public required string Firstname {get; set;}
    public required string Lastname {get; set;}
    public required string Birthdate {get; set;}
    public required string Email {get; set;}
    public required int Phone {get; set;}
    public string Role {get; set;}
    public string? Image {get; set;}
}