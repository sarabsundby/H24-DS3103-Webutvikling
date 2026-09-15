// Imports
using TrumpVerseApi.Interfaces;

// Exports
namespace TrumpVerseApi.Models;

public class Merch : IMerch
{
    public int Id {get; set;}
    public required string Name {get; set;}
    public required string Type  {get; set;}
    public int Price {get; set;}
    public required string Size {get; set;}
    public float? Amount{get; set;}
    public string? Image {get; set;}

}