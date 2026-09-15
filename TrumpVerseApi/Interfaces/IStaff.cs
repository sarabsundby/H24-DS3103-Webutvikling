// Exports
namespace TrumpVerseApi.Interfaces;

interface IStaff
{
    int Id {get; set;}
    string Firstname {get; set;}
    string Lastname {get; set;}
    string Birthdate {get; set;}
    string Email {get; set;}
    int Phone {get; set;}
    string Role {get; set;}
    string? Image {get; set;}
}