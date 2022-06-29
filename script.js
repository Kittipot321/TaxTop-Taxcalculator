const calculateFunction = () => {
    let text = document.getElementById("amount").value
    let AmountFloat = parseFloat(text)
    if (parseFloat(AmountFloat) < 0){
        alert("ระบบไม่รับเลขจำนวนติดลบ กรุณาลองใหม่อีกครั้ง")
        clearNumber()
    }
    else if (parseFloat(AmountFloat) >= 0){
        let answer = calculateTax(text)
        document.getElementById("answer").innerHTML = answer
    }
    else{
        alert("เลขจำนวนไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง")
        clearNumber()
    }
}

const calculateTax = (num) => {
    let total = 0
    if (num >= 0 && num <= 150000)
        total += 0
    else if (num > 150000 && num <= 300000)
        total = (num - 150000) * 0.05
    else if (num > 300000 && num <= 500000)
        total = ((num - 300000) * 0.10) + 7500
    else if (num > 500000 && num <= 750000)
        total = ((num - 500000) * 0.15) + 27500
    else if (num > 750000 && num <= 1000000)
        total = ((num - 750000) * 0.20) + 65000
    else if (num > 1000000 && num <= 2000000)
        total = ((num - 1000000) * 0.25) + 115000
    else if (num > 2000000 && num <= 5000000)
        total = ((num - 2000000) * 0.30) + 365000
    else if (num > 5000000)
        total = ((num - 5000000) * 0.35) + 965000
    return total.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const clearNumber = () => {
    document.getElementById("amount").value = ""
    document.getElementById("answer").innerHTML = "0.00"
}