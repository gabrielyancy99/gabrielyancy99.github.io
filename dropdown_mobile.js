if (window.matchMedia("(max-width: 800px)").matches) {
    document.getElementById("dropdownResearch").addEventListener("click", function() {
        document.getElementById("dropdownRItems").classList.toggle("activated");
        if (document.getElementById("dropdownSItems").classList.contains("activated")) {
            document.getElementById("dropdownSItems").classList.toggle("activated");
        }
    });
    const link = document.getElementById("dropdownResearch");
    link.href = "#";

    document.getElementById("dropdownSkills").addEventListener("click", function() {
        document.getElementById("dropdownSItems").classList.toggle("activated");
        if (document.getElementById("dropdownRItems").classList.contains("activated")) {
            document.getElementById("dropdownRItems").classList.toggle("activated");
        }
    });
    const link2 = document.getElementById("dropdownSkills");
    link2.href = "#";
}