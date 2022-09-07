
function main() {
    var keys = document.querySelectorAll('.key');
    var locks = document.querySelectorAll('.key_capslk i');
    
    var keyBoard = document.querySelector('.key_board');

    document.addEventListener('keydown', function(e) {
        deleteActive(keys);

        keys.forEach(element => {
            if(element.getAttribute('value') === e.key.toLowerCase()) {
                if(element.getAttribute('value') === 'escape'){
                    element.classList.add('key_active_esc');
                    setTimeout(() => {
                        element.classList.remove('key_active_esc');
                    }, 1000)
                    return;
                }

                if(element.classList.contains('key_move')){
                    element.classList.add('key_active_move');
                    setTimeout(() => {
                        element.classList.remove('key_active_move');
                    }, 1000)
                    return;
                }

                element.classList.add('key_active');
                setTimeout(() => {
                    element.classList.remove('key_active');
                }, 1000)

                if(element.classList.contains('key_capslk')){
                    locks.forEach(lock => {
                        lock.classList.toggle('hidden');
                    })
                }
            }
        });
    })


    function deleteActive(keys){
        keys.forEach(key => {
            key.classList.remove('key_active_esc');
            key.classList.remove('key_active');
            key.classList.remove('key_active_move');
        })
    }

    
    var inputs = document.querySelectorAll('.select-background input');
    inputs.forEach(input => {
        input.onclick = (e) => {
            inputs.forEach(element => {
                if(element.checked && element !== input) {
                    element.checked = false;
                }
            });

            if(e.target.checked){
                e.target.checked = true;
            }
            else{
                e.target.checked = false;
            }

            var inputChecked = document.querySelector('input:checked');
            if(inputChecked){
                if(inputChecked.value === 'black'){
                    keyBoard.style.animation = 'none';
                    keyBoard.style.backgroundColor = 'black';
                    keyBoard.style.border = '6px solid black';
                }
                else if(inputChecked.value === 'yellow'){
                    keyBoard.style.animation = 'none';
                    keyBoard.style.backgroundColor = 'yellow';
                    keyBoard.style.border = '6px solid yellow';
                }
                else if(inputChecked.value === 'red'){
                    keyBoard.style.animation = 'none';
                    keyBoard.style.backgroundColor = 'red';
                    keyBoard.style.border = '6px solid red';
                }
                else if(inputChecked.value === 'blue'){
                    keyBoard.style.animation = 'none';
                    keyBoard.style.backgroundColor = 'blue';
                    keyBoard.style.border = '6px solid blue';
                }
                else if(inputChecked.value === 'pink'){
                    keyBoard.style.animation = 'none';
                    keyBoard.style.backgroundColor = 'pink';
                    keyBoard.style.border = '6px solid pink';
                }
            }
            else{
                keyBoard.style.animation = 'backgroundChange ease-in 5s infinite';
            }
        }
    })

}

main();