// 1. توليد رقم عشوائي بين 1 و 100 عند بدء اللعبة
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// 2. مسك عناصر الـ HTML
const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const messageText = document.getElementById("message-text");
const attemptsText = document.getElementById("attempts-text");

// 3. التحكم بالحدث عند الضغط على زر التخمين
guessBtn.addEventListener("click", function() {
    // تحويل القيمة المدخلة من نص إلى رقم
    const userGuess = parseInt(guessInput.value);

    // التأكد إن اللاعب دخل رقم صحيح
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageText.innerText = "❌ رجاءً أدخل رقم صحيح بين 1 و 100!";
        messageText.style.color = "#ff6b6b";
        return;
    }

    // زيادة عدد المحاولات محاولة واحدة
    attempts++;
    attemptsText.innerText = "عدد المحاولات: " + attempts;

    // شروط اللعبة (مقارنة رقم اللاعب برقم الكمبيوتر)
    if (userGuess === secretNumber) {
        messageText.innerText = `🎉 كفووو! حزرت الرقم وهو (${secretNumber})`;
        messageText.style.color = "#1dd1a1";
        guessBtn.innerText = "العب من جديد";
        
        // إعادة تصفير اللعبة لو كبس الزر مرة ثانية بعد الفوز
        guessBtn.onclick = function() {
            location.reload(); 
        };
    } else if (userGuess > secretNumber) {
        messageText.innerText = "📉 الرقم السري أصغر من هيك!";
        messageText.style.color = "#ff9f43";
    } else {
        messageText.innerText = "📈 الرقم السري أكبر من هيك!";
        messageText.style.color = "#ff9f43";
    }

    // مسح الخانة تلقائياً بعد كل تخمين عشان تسهل على اللاعب
    guessInput.value = "";
    guessInput.focus();
});