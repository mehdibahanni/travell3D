let menuBar  = document.querySelector('#menu-btn');
let aside = document.querySelector('aside');

let darkMenu = document.querySelector('.darck-mode');
console.log()
menuBar.addEventListener('click',()=>{
    aside.style.display = 'inline';

    let closeMenue = aside.querySelector('.toggle #clsoe-btn');
    closeMenue.addEventListener('click',()=>{
        aside.style.display = 'none';
    })
})

darkMenu.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode-variables');
    darkMenu.querySelector('span:nth-child(2)').classList.toggle('active');
    darkMenu.querySelector('span:nth-child(1)').classList.toggle('active');
})
Orders.forEach((order)=>{
    let tr = document.createElement('tr');
    let trContent = `
        <td>${order.productName}</td>
        <td>${order.paymentStatus}</td>
        <td>${order.producNumber}</td>
        <td class="${order.status === 'Declined' ? 'danger' :
        order.status === 'Pendgin'? 'warning':'primary'}
        ">${order.status}</td>
        `;
        tr.innerHTML = trContent;
        document.querySelector('table tbody').appendChild(tr);
})