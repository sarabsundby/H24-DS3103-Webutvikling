// Exports
namespace TrumpVerseApi.Interfaces;

interface IMerch
{
    int Id {get; set;}
    string Name {get; set;}
    string Type {get; set;}
    int Price {get; set;}
    string Size {get; set;}
    float? Amount {get; set;}
    string? Image {get; set;}
}