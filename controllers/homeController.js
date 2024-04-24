exports.showIndex = (req, res) => {
    res.render("index");
};

exports.showSignUp = (req,res) => {
    res.render("contact");
};
exports.postedContactForm = (req,res) => {
    res.render("thanks");
};
var courses = [
    {
        title: "https://www.naver.com",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];

exports.showCourses = (req,res) => {
    res.render("courses",{
        offeredCourses: courses
    });
};