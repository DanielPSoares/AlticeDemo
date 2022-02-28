namespace AlticeDemoBackend.Models
{
    public class Survey
    {
        public Survey() { }

        public int ID { get; set; }

        public string? Nickname { get; set; }

        public string? CatsDogs { get; set; }

        public bool? Chocolate { get; set; }

        public string? Fish { get; set; }

        public string? Color { get; set; }

        public bool? Cookie { get; set; }

        public BasicInfo? BasicInfo { get; set; }
    }
}
