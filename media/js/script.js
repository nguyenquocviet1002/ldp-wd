const clickHeader = () => {
    const btnMenu = document.getElementById('btn-menu');
    const navMenu = document.getElementById('nav-menu');
    const bgMenu = document.getElementById('bg-menu');
    const closeMenu = document.getElementById('close-menu');
    const itemMenu = document.querySelectorAll('.header__item');
    const hidden = () => {
        navMenu.classList.remove('show');
        bgMenu.classList.remove('show');
    }
    btnMenu.addEventListener('click', () => {
        navMenu.classList.add('show');
        bgMenu.classList.add('show');
    });
    bgMenu.addEventListener('click', hidden);
    closeMenu.addEventListener('click', hidden);
    itemMenu.forEach(item => {
        item.addEventListener('click', hidden)
    })
}
clickHeader();

const addError = (elm) => {
    elm.parentNode.classList.add('error');
    elm.parentNode.querySelector('.form__message').innerText = 'Vui lòng điền thông tin';
}

const removeError = (elm) => {
    elm.parentNode.classList.remove('error');
    elm.parentNode.querySelector('.form__message').innerText = '';
}

const firstForm = () => {
    const name = document.querySelector('#first-form input[name="name"]');
    const relationship = document.querySelector('#first-form select[name="relationship"]');
    const message = document.querySelector('#first-form textarea[name="message"]');
    const submit = document.querySelector('#first-form input[type="button"]');
    submit.addEventListener('click', () => {
        removeError(name);
        removeError(relationship);
        removeError(message);
        if(!name.value || !relationship.value || !message.value){
            if(!name.value){
                addError(name);
            }
            if(!relationship.value){
                addError(relationship);
            }
            if(!message.value){
                addError(message);
            }
        } else {
            submit.setAttribute('disabled', '');
            submit.value = 'Đang gửi...';
            setTimeout(() => {
                submit.removeAttribute('disabled');
                submit.value = 'Gửi lời chúc';
            }, 3000)
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLScP0KF2cjujwEqLKD9IARR8i9Kk7lZtppQ5Zjx0ZkEZG7jkfg/formResponse",
                data: {
                    "entry.97079580": name.value,
                    "entry.1739410324": relationship.value,
                    "entry.778353769": message.value,
                },
                type: "POST",
                dataType: "json",
                statusCode: {
                    0: function (data) {
                    },
                    200: function (data) {
                    },
                },
            });
            name.value = '';
            relationship.value = '';
            message.value = '';
        }

    })
}
firstForm();

const html = `
<div class="modal" id="modal-success">
    <div class="modal__box">
        <button type="button" class="modal__close" onclick="closeModal()">×</button>
        <h2 class="modal__text">Hẹn gặp lại!</h2>
        <div class="modal__meta">Chúng mình mong muốn được gặp mặt những người yêu quý để được nhận những lời chúc phúc và mong mọi người sẽ chiếu cố tương lai của chúng mình nhiều hơn!</div>
    </div>
</div>
`;

const closeModal = () => {
    document.getElementById('modal-success').remove();
}

const secondForm = () => {
    const name = document.querySelector('#second-form input[name="name"]');
    const relationship = document.querySelector('#second-form select[name="relationship"]');
    const date = document.querySelector('#second-form select[name="date"]');
    const quantity = document.querySelector('#second-form input[name="quantity"]');
    const submit = document.querySelector('#second-form input[type="button"]');
    submit.addEventListener('click', () => {
        removeError(name);
        removeError(relationship);
        removeError(date);
        removeError(quantity);
        if(!name.value || !relationship.value || !date.value || !quantity.value){
            if(!name.value){
                addError(name);
            }
            if(!relationship.value){
                addError(relationship);
            }
            if(!date.value){
                addError(date);
            }
            if(!quantity.value){
                addError(quantity);
            }
        } else {
            submit.setAttribute('disabled', '');
            submit.value = 'Đang gửi...';
            setTimeout(() => {
                submit.removeAttribute('disabled');
                submit.value = 'Xác nhận';
                document.body.insertAdjacentHTML("beforeend", html);
                document.addEventListener('click', e => {
                    if(document.querySelector('.modal__box')){
                        if (!document.querySelector('.modal__box').contains(e.target)) closeModal();
                    }
                });
            }, 3000)
            $.ajax({
                url: "https://docs.google.com/forms/d/e/1FAIpQLSfInOlv2oKS47vX1WQOamEB-aYP8SA8AL58n_mIwLo3BqDXZw/formResponse",
                data: {
                    "entry.357511928": name.value,
                    "entry.2094005249": relationship.value,
                    "entry.1700211970": date.value,
                    "entry.1942756304": quantity.value,
                },
                type: "POST",
                dataType: "json",
                statusCode: {
                    0: function (data) {
                    },
                    200: function (data) {
                    },
                },
            });
            name.value = '';
            relationship.value = '';
            date.value = '';
            quantity.value = '';
        }
    })
}
secondForm();
