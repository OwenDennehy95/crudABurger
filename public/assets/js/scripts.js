
$("#orderBtn").on("click", handleCreateBurger);
$(".freshBurgerBtn").on("click", handleUpdateBurger);
$(".deleteBurgerBtn").on("click", handleDeleteBurger);

function handleCreateBurger() {

    var newBurger = $("#burgerInput").val().trim();
    if(newBurger){
        $.ajax({
            url: "/api/burger/" + newBurger,
            method: "POST"
        }).then(() => location.reload())
    }
}

function handleUpdateBurger() {

        $.ajax({
            url: "/api/burger/" + $(this).attr("id"),
            method: "PUT"
        }).then(() => location.reload())
}

function handleDeleteBurger() {

        $.ajax({
            url: "/api/burger/" + $(this).attr("id"),
            method: "DELETE"
        }).then(() => location.reload())
}