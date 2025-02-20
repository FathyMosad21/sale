document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = "تمت الإضافة ✓";
        setTimeout(() => {
            button.innerHTML = "اشتري الآن";
        }, 2000);
    });
});
