namespace AlticeDemoBackend.Models
{
    public class BasicInfo
    {
        public BasicInfo () { }

        public int ID { get; set; }

        public string? FullName { get; set; }

        public DateTime? BirthDate { get; set; }

        public string? Gender { get; set; }

        public string? City { get; set; }

        public string? PhoneNumber { get; set; }

        public string? Email { get; set; }
    }
}
