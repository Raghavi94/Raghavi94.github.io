$(function () {
    var role=0;
    var roles=["ECE Undergrad","Lifelong Learner","Explorer","Tech Enthusiast"];
    setInterval(()=>{
        $(".hero-heading span").text(roles[role++ % roles.length]);
    },100);
});
