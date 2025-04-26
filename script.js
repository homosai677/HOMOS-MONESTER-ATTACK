
let balance = 0;

function goBack() {
    alert('رجوع للصفحة السابقة!');
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        if (section.id === id || section.id === 'user-info' || section.id === 'actions') {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });
}

function copyPhoneNumber() {
    navigator.clipboard.writeText('01012265953').then(() => {
        alert('تم نسخ الرقم!');
    });
}

function confirmDeposit() {
    const amount = document.getElementById('deposit-amount').value;
    const sender = document.getElementById('deposit-sender').value;
    const proof = document.getElementById('deposit-proof').files[0];

    if (!amount || !sender || !proof) {
        alert('محتاج تملأ كل البيانات!');
        return;
    }
    
    alert('ابعث بياناتك مع الاسكرين على الواتساب 01016553764');
}

function confirmWithdraw() {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const number = document.getElementById('withdraw-number').value;
    
    if (!amount || !number) {
        alert('محتاج تملأ كل البيانات!');
        return;
    }
    
    let fee = Math.max(amount * 0.015, 3);
    let finalAmount = amount - fee;
    
    if (amount > balance) {
        alert('رصيدك مش مكفي!');
        return;
    }
    
    balance -= amount;
    document.getElementById('balance').textContent = balance.toFixed(2);
    alert(`تم خصم ${fee.toFixed(2)} جنيه كرسوم! ابعت بياناتك على الواتساب 01016553764`);
}

function confirmTransfer() {
    const email = document.getElementById('transfer-email').value;
    const amount = parseFloat(document.getElementById('transfer-amount').value);
    
    if (!email || !amount) {
        alert('محتاج تملأ كل البيانات!');
        return;
    }
    
    if (amount > balance) {
        alert('رصيدك مش مكفي!');
        return;
    }
    
    balance -= amount;
    document.getElementById('balance').textContent = balance.toFixed(2);
    alert(`تم تحويل ${amount} جنيه لـ ${email}`);
}
