// ข้อมูลคำถาม
const questionsBank = [
    {
        question: "ในการเตรียมสารละลาย NaOH 0.1 mol/L ปริมาตร 300 mL จะต้องชั่ง NaOH กี่กรัม?",
        options: [
            "1.0 กรัม",
            "1.2 กรัม",
            "0.8 กรัม",
            "1.5 กรัม"
        ],
        answer: 1,
        explanation: "คำนวณจากสูตร n = M × V = 0.1 × 0.3 = 0.03 mol, มวล = n × MW = 0.03 × 40 = 1.2 กรัม"
    },
    {
        question: "สารใดใช้เป็นอินดิเคเตอร์ในการไทเทรดระหว่าง KHP กับ NaOH?",
        options: [
            "เมทิลเรด",
            "ฟีนอล์ฟทาลีน",
            "โบรโมไทมอลบลู",
            "ไทมอลบลู"
        ],
        answer: 1,
        explanation: "ฟีนอล์ฟทาลีนเป็นอินดิเคเตอร์ที่เหมาะสมเพราะเปลี่ยนสีในช่วง pH 8.3-10.0 ซึ่งตรงกับจุดยุติของการไทเทรดนี้"
    },
    {
        question: "เพราะเหตุใดจึงต้องเทกรดเข้มข้นลงในน้ำเสมอ?",
        options: [
            "เพื่อป้องกันการสาดกระเด็นของกรด",
            "เพราะน้ำมีความร้อนจำเพาะสูงกว่า",
            "เพื่อให้สารละลายเข้มข้นขึ้น",
            "เพื่อลดการระเหยของกรด"
        ],
        answer: 0,
        explanation: "การเทกรดลงในน้ำจะป้องกันการสาดกระเด็นเนื่องจากความร้อนที่เกิดขึ้นจากการละลายจะถูกน้ำดูดซับได้ดีกว่า"
    },
    {
        question: "สีของสารละลายที่มีไอออน copper(II) เป็นอย่างไร?",
        options: [
            "สีแดง",
            "สีน้ำเงิน",
            "สีเขียว",
            "สีเหลือง"
        ],
        answer: 1,
        explanation: "ไอออน Cu²⁺ ในสารละลายจะมีสีน้ำเงิน เช่น ใน CuSO₄·5H₂O"
    },
    {
        question: "ในการไทเทรดโซดาแอช (Na₂CO₃) ด้วย HCl จะมีจุดยุติกี่จุด?",
        options: [
            "1 จุด",
            "2 จุด",
            "3 จุด",
            "ไม่มีการเปลี่ยนแปลง pH"
        ],
        answer: 1,
        explanation: "Na₂CO₃ เป็นเบสหลายฟังก์ชัน จึงมีจุดยุติ 2 จุด คือที่ pH ~8.3 และ pH ~3.8"
    },
    {
        question: "สารใดใช้เป็นอินดิเคเตอร์สำหรับจุดยุติที่สองในการไทเทรดโซดาแอช?",
        options: [
            "ฟีนอล์ฟทาลีน",
            "โบรโมเครซอลกรีน",
            "เมทิลออเรนจ์",
            "ไทมอลบลู"
        ],
        answer: 1,
        explanation: "โบรโมเครซอลกรีนเปลี่ยนสีในช่วง pH 3.8-5.4 ซึ่งเหมาะสมสำหรับจุดยุติที่สอง"
    },
    {
        question: "สมบัติคอลลิเกทีฟไม่รวมถึงข้อใดต่อไปนี้?",
        options: [
            "การเพิ่มขึ้นของจุดเดือด",
            "การลดลงของจุดเยือกแข็ง",
            "ความดันออสโมติก",
            "ความหนาแน่นของสารละลาย"
        ],
        answer: 3,
        explanation: "สมบัติคอลลิเกทีฟขึ้นกับจำนวนอนุภาคของตัวถูกละลาย ไม่เกี่ยวกับความหนาแน่น"
    },
    {
        question: "Kb ของน้ำมีค่าเท่าไร?",
        options: [
            "0.52 °C/m",
            "1.86 °C/m",
            "2.53 °C/m",
            "3.63 °C/m"
        ],
        answer: 0,
        explanation: "ค่าคงที่การเพิ่มจุดเดือดโมแลล (Kb) ของน้ำคือ 0.52 °C/m"
    },
    {
        question: "สารละลาย urea ใน ethanol มีจุดเดือดสูงกว่า ethanol บริสุทธิ์เพราะเหตุใด?",
        options: [
            "urea ทำให้ความดันไอลดลง",
            "urea ทำให้ความหนาแน่นเพิ่มขึ้น",
            "urea ทำปฏิกิริยากับ ethanol",
            "urea เปลี่ยนโครงสร้างของ ethanol"
        ],
        answer: 0,
        explanation: "การมีตัวถูกละลายที่ไม่ระเหยจะลดความดันไอของตัวทำละลาย ทำให้ต้องใช้พลังงานมากขึ้นเพื่อให้ถึงจุดเดือด"
    },
    {
        question: "ปฏิกิริยาใดต่อไปนี้เป็นการแทนที่?",
        options: [
            "HCl + NaOH → NaCl + H₂O",
            "Zn + CuSO₄ → ZnSO₄ + Cu",
            "NH₄Cl → NH₃ + HCl",
            "H₂ + O₂ → H₂O"
        ],
        answer: 1,
        explanation: "Zn แทนที่ Cu ใน CuSO₄ เป็นปฏิกิริยาการแทนที่เชิงเดี่ยว"
    },
    {
        question: "สีของตะกอนที่เกิดจากปฏิกิริยาระหว่าง NaOH และ FeCl₃ เป็นอย่างไร?",
        options: [
            "สีขาว",
            "สีแดง",
            "สีน้ำตาลแดง",
            "สีเขียว"
        ],
        answer: 2,
        explanation: "Fe(OH)₃ ที่เกิดขึ้นมีสีน้ำตาลแดง"
    },
    {
        question: "แก๊สใดเกิดขึ้นเมื่อเติม HCl ลงใน CaCO₃?",
        options: [
            "O₂",
            "CO₂",
            "H₂",
            "NH₃"
        ],
        answer: 1,
        explanation: "ปฏิกิริยา: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑"
    },
    {
        question: "ในการทดลองเซลล์กัลวานิก Cu-Zn ขั้วใดเป็นแคโทด?",
        options: [
            "Cu",
            "Zn",
            "ทั้งสองขั้ว",
            "ไม่มีขั้วแคโทด"
        ],
        answer: 0,
        explanation: "Cu²⁺ + 2e⁻ → Cu เป็นปฏิกิริยารีดักชันที่เกิดขึ้นที่ขั้ว Cu ซึ่งเป็นขั้วแคโทด"
    },
    {
        question: "ในเซลล์กัลวานิก สะพานเกลือมีหน้าที่อะไร?",
        options: [
            "เป็นทางเดินของอิเล็กตรอน",
            "รักษาความเป็นกลางทางไฟฟ้า",
            "เพิ่มความต่างศักย์",
            "ลดอุณหภูมิของเซลล์"
        ],
        answer: 1,
        explanation: "สะพานเกลือช่วยให้ไอออนเคลื่อนที่เพื่อรักษาความเป็นกลางทางไฟฟ้าในแต่ละครึ่งเซลล์"
    },
    {
        question: "ในการชุบโลหะ ชิ้นงานต้องต่อกับขั้วใด?",
        options: [
            "ขั้วบวก",
            "ขั้วลบ",
            "ทั้งสองขั้ว",
            "ไม่ต้องต่อขั้ว"
        ],
        answer: 1,
        explanation: "ชิ้นงานเป็นแคโทด (ขั้วลบ) ที่ไอออนของโลหะจะมารับอิเล็กตรอนและเกาะบนผิวชิ้นงาน"
    },
    {
        question: "สารใดต่อไปนี้ใช้เป็นสารมาตรฐานปฐมภูมิในการไทเทรด?",
        options: [
            "NaOH",
            "HCl",
            "KHP",
            "ฟีนอล์ฟทาลีน"
        ],
        answer: 2,
        explanation: "KHP (โพแทสเซียมไฮโดรเจนพทาเลท) เป็นสารมาตรฐานปฐมภูมิที่ใช้ไทเทรดหาความเข้มข้นของ NaOH"
    },
    {
        question: "หาก KHP ที่ใช้ไม่แห้งสนิท จะมีผลอย่างไรต่อความเข้มข้นของ NaOH ที่คำนวณได้?",
        options: [
            "ความเข้มข้นต่ำกว่าความเป็นจริง",
            "ความเข้มข้นสูงกว่าความเป็นจริง",
            "ไม่มีผล",
            "ไม่สามารถคำนวณได้"
        ],
        answer: 1,
        explanation: "KHP ที่ไม่แห้งจะมีน้ำเป็นส่วนประกอบ ทำให้ชั่งได้มวล KHP จริงน้อยกว่าที่คิด ส่งผลให้คำนวณความเข้มข้น NaOH สูงเกินจริง"
    },
    {
        question: "ในการเตรียมสารละลายจากสารบริสุทธิ์ ขั้นตอนใดสำคัญที่สุดเพื่อความแม่นยำ?",
        options: [
            "การชั่งมวลสาร",
            "การเลือกใช้ขวดปรับปริมาตร",
            "การผสมสารละลาย",
            "การเลือกแท่งแก้วคน"
        ],
        answer: 0,
        explanation: "การชั่งมวลสารให้ถูกต้องแม่นยำเป็นขั้นตอนที่สำคัญที่สุดเพราะเป็นพื้นฐานของการคำนวณความเข้มข้น"
    },
    {
        question: "สารใดต่อไปนี้ไม่ละลายน้ำ?",
        options: [
            "NaCl",
            "CaCO₃",
            "CuSO₄",
            "NaOH"
        ],
        answer: 1,
        explanation: "CaCO₃ เป็นเกลือที่ไม่ละลายน้ำในขณะที่สารอื่นๆ ละลายน้ำได้ดี"
    },
    {
        question: "ในการทดลองสมบัติคอลลิเกทีฟ หลอดรูเล็กมีหน้าที่อะไร?",
        options: [
            "วัดปริมาตรสารละลาย",
            "สังเกตการเดือดของสารละลาย",
            "คนสารละลาย",
            "กรองสารละลาย"
        ],
        answer: 1,
        explanation: "หลอดรูเล็กใช้สังเกตการเกิดฟองอากาศเมื่อสารละลายเดือด เพื่อกำหนดจุดเดือดที่แน่นอน"
    },
    {
        question: "สีของสารละลาย CoCl₂ เป็นอย่างไร?",
        options: [
            "สีแดง",
            "สีชมพู",
            "สีน้ำเงิน",
            "สีเหลือง"
        ],
        answer: 1,
        explanation: "สารละลาย CoCl₂ มีสีชมพู"
    },
    {
        question: "ปฏิกิริยาใดต่อไปนี้เกิดแก๊ส NH₃?",
        options: [
            "HCl + NaOH",
            "NaOH + NH₄Cl",
            "HCl + CaCO₃",
            "AgNO₃ + NaCl"
        ],
        answer: 1,
        explanation: "ปฏิกิริยา: NaOH + NH₄Cl → NaCl + H₂O + NH₃↑"
    },
    {
        question: "ในการไทเทรด กราฟ titration curve ของกรดแก่กับเบสแก่มีลักษณะอย่างไร?",
        options: [
            "ค่อยๆ เพิ่มขึ้น",
            "ค่อยๆ ลดลง",
            "เปลี่ยนแปลงเล็กน้อยแล้วเพิ่มขึ้นอย่างรวดเร็วที่จุดยุติ",
            "คงที่"
        ],
        answer: 2,
        explanation: "กราฟจะมี pH เปลี่ยนแปลงเล็กน้อยก่อนจุดยุติ แล้วเพิ่มขึ้นอย่างรวดเร็วที่จุดยุติ"
    },
    {
        question: "สารใดใช้เป็นสะพานเกลือในเซลล์กัลวานิก?",
        options: [
            "NaCl",
            "KNO₃",
            "KCl อิ่มตัว",
            "NaOH"
        ],
        answer: 2,
        explanation: "สารละลาย KCl อิ่มตัวเป็นสารที่นิยมใช้ทำสะพานเกลือเพราะไอออน K⁺ และ Cl⁻ มีอัตราการเคลื่อนที่ใกล้เคียงกัน"
    },
    {
        question: "ในการทดลองการชุบโลหะ เหรียญต้องขัดด้วยกระดาษทรายเพื่ออะไร?",
        options: [
            "เพิ่มความสวยงาม",
            "ขจัดคราบออกไซด์และสิ่งสกปรก",
            "ทำให้เหรียญบางลง",
            "เพิ่มความมันวาว"
        ],
        answer: 1,
        explanation: "การขัดช่วยขจัดคราบออกไซด์และสิ่งสกปรกที่ผิวเพื่อให้โลหะที่ชุบติดได้ดีขึ้น"
    },
    {
        question: "สมการเนินสต์ใช้ในกรณีใด?",
        options: [
            "ระบบที่อุณหภูมิไม่ใช่ 25°C",
            "ระบบที่ความเข้มข้นไม่ใช่ 1 M",
            "ระบบที่ใช้สารไม่บริสุทธิ์",
            "ระบบที่ไม่มีสะพานเกลือ"
        ],
        answer: 1,
        explanation: "สมการเนินสต์ใช้คำนวณศักย์ไฟฟ้าของเซลล์เมื่อความเข้มข้นของไอออนไม่ใช่ 1 M"
    },
    {
        question: "สีของตะกอน AgCl เป็นอย่างไร?",
        options: [
            "สีขาว",
            "สีเหลือง",
            "สีดำ",
            "สีเขียว"
        ],
        answer: 0,
        explanation: "AgCl เป็นตะกอนสีขาว"
    },
    {
        question: "ในการทดลองปฏิกิริยาการแทนที่ สารใดทำปฏิกิริยากับ HCl แล้วได้แก๊ส?",
        options: [
            "NaOH",
            "NH₄Cl",
            "CaCO₃",
            "FeCl₃"
        ],
        answer: 2,
        explanation: "CaCO₃ ทำปฏิกิริยากับ HCl ได้แก๊ส CO₂"
    },
    {
        question: "ในการทดลองเซลล์กัลวานิก ถ้า Ecell มีค่าเป็นบวกแสดงว่าอะไร?",
        options: [
            "ปฏิกิริยาเกิดขึ้นเองได้",
            "ปฏิกิริยาไม่เกิดขึ้นเอง",
            "เซลล์ไม่ทำงาน",
            "ต้องให้พลังงานจากภายนอก"
        ],
        answer: 0,
        explanation: "Ecell เป็นบวกแสดงว่าปฏิกิริยาเกิดเองได้และเซลล์สามารถทำงานได้"
    },
    {
        question: "สารใดต่อไปนี้ใช้เป็นอินดิเคเตอร์ในการไทเทรดกรด-เบส?",
        options: [
            "AgNO₃",
            "KMnO₄",
            "ฟีนอล์ฟทาลีน",
            "CuSO₄"
        ],
        answer: 2,
        explanation: "ฟีนอล์ฟทาลีนเป็นอินดิเคเตอร์กรด-เบสที่ใช้บ่อยในการไทเทรด"
    },
    {
        question: "ในการเตรียมสารละลาย HCl 0.1 M จาก HCl เข้มข้น ต้องปฏิบัติอย่างไร?",
        options: [
            "เทน้ำลงในกรด",
            "เทกรดลงในน้ำ",
            "เทพร้อมกัน",
            "ไม่สำคัญลำดับการเท"
        ],
        answer: 1,
        explanation: "ต้องเทกรดเข้มข้นลงในน้ำเสมอเพื่อป้องกันการสาดกระเด็นจากความร้อนที่เกิดขึ้น"
    },
    {
        question: "สารใดต่อไปนี้ไม่ควรเก็บในขวดแก้วสีชา?",
        options: [
            "NaOH",
            "KMnO₄",
            "AgNO₃",
            "HCl"
        ],
        answer: 1,
        explanation: "KMnO₄ ไวต่อแสงจึงต้องเก็บในขวดแก้วสีชา ส่วนสารอื่นไม่จำเป็น"
    },
    {
        question: "ในการทดลองสมบัติคอลลิเกทีฟ การเพิ่มปริมาณตัวถูกละลายจะมีผลอย่างไร?",
        options: [
            "เพิ่มจุดเดือดมากขึ้น",
            "ลดจุดเดือดลง",
            "ไม่เปลี่ยนแปลงจุดเดือด",
            "ทำให้จุดเดือดไม่แน่นอน"
        ],
        answer: 0,
        explanation: "การเพิ่มตัวถูกละลายจะทำให้จุดเดือดเพิ่มขึ้นตามสมบัติคอลลิเกทีฟ"
    },
    {
        question: "สีของสารละลาย NiCl₂ เป็นอย่างไร?",
        options: [
            "สีแดง",
            "สีเขียว",
            "สีเหลือง",
            "สีน้ำเงิน"
        ],
        answer: 1,
        explanation: "สารละลาย NiCl₂ มีสีเขียว"
    },
    {
        question: "ในการทดลองการชุบโลหะ แผ่นทองแดงต้องต่อกับขั้วใด?",
        options: [
            "ขั้วบวก",
            "ขั้วลบ",
            "ทั้งสองขั้ว",
            "ไม่ต้องต่อขั้ว"
        ],
        answer: 0,
        explanation: "แผ่นทองแดงเป็นแอโนด (ขั้วบวก) ที่จะเกิดออกซิเดชันให้ Cu²⁺ เข้าสู่สารละลาย"
    },
    {
        question: "ในการทดลองปฏิกิริยาการแทนที่ สารใดทำปฏิกิริยากับ NaOH แล้วได้แก๊ส NH₃?",
        options: [
            "CaCO₃",
            "NH₄Cl",
            "FeCl₃",
            "CuSO₄"
        ],
        answer: 1,
        explanation: "NH₄Cl ทำปฏิกิริยากับ NaOH ได้แก๊ส NH₃"
    },
    {
        question: "ในการทดลองเซลล์กัลวานิก คู่โลหะใดให้ค่า Ecell สูงที่สุด?",
        options: [
            "Cu-Zn",
            "Cu-Mg",
            "Zn-Mg",
            "Fe-Zn"
        ],
        answer: 1,
        explanation: "Cu-Mg มีค่าศักย์รีดักชันมาตรฐานต่างกันมากที่สุด จึงให้ค่า Ecell สูงที่สุด"
    },
    {
        question: "สารใดต่อไปนี้ใช้เป็นสารมาตรฐานทุติยภูมิในการไทเทรด?",
        options: [
            "KHP",
            "NaOH",
            "กรดออกซาลิก",
            "Na₂CO₃"
        ],
        answer: 1,
        explanation: "NaOH เป็นสารมาตรฐานทุติยภูมิที่ต้องไทเทรดกับสารมาตรฐานปฐมภูมิก่อนใช้"
    },
    {
        question: "ในการทดลองสมบัติคอลลิเกทีฟ ต้องบันทึกอุณหภูมิเมื่อใด?",
        options: [
            "เมื่อเริ่มเห็นฟองอากาศ",
            "เมื่อฟองอากาศออกอย่างรวดเร็ว",
            "เมื่อฟองอากาศหยุดออกและของเหลวเริ่มถูกดูดเข้าไปในหลอด",
            "เมื่อสารละลายเริ่มขุ่น"
        ],
        answer: 2,
        explanation: "ต้องบันทึกอุณหภูมิเมื่อฟองอากาศหยุดออกและของเหลวเริ่มถูกดูดเข้าไปในหลอด ซึ่งเป็นจุดเดือดที่แน่นอน"
    }
];

// ฟังก์ชันสลับตำแหน่งคำถาม
function shuffleQuestions() {
    const shuffled = [...questionsBank];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// ฟังก์ชันสลับตำแหน่งตัวเลือก
function shuffleOptions(question) {
    const originalAnswer = question.options[question.answer];
    const shuffledOptions = [...question.options];
    
    // Fisher-Yates shuffle
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    
    // หาตำแหน่งใหม่ของคำตอบที่ถูกต้อง
    const newAnswerIndex = shuffledOptions.indexOf(originalAnswer);
    
    return {
        ...question,
        options: shuffledOptions,
        answer: newAnswerIndex
    };
}

// ตัวแปรสำหรับเก็บสถานะ
let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 3600; // 60 นาที ในหน่วยวินาที
let timer;
let userAnswers = [];

// DOM Elements
const startContainer = document.querySelector('.start-container');
const quizContainer = document.getElementById('quizContainer');
const resultContainer = document.getElementById('resultContainer');
const questionsContainer = document.getElementById('questions');
const startBtn = document.getElementById('startBtn');
const submitBtn = document.getElementById('submitBtn');
const restartBtn = document.getElementById('restartBtn');
const timerElement = document.getElementById('time');
const scoreElement = document.getElementById('score');
const feedbackElement = document.getElementById('feedback');
const progressBar = document.getElementById('progressBar');
const correctAnswersElement = document.getElementById('correctAnswers');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
submitBtn.addEventListener('click', submitQuiz);
restartBtn.addEventListener('click', restartQuiz);

// ฟังก์ชันเริ่มทำแบบทดสอบ
function startQuiz() {
    // สลับคำถามและตัวเลือก
    const shuffledQuestions = shuffleQuestions();
    questions = shuffledQuestions.map(q => shuffleOptions(q));
    userAnswers = new Array(questions.length).fill(null);
    
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    // เริ่มนับถอยหลัง
    timer = setInterval(updateTimer, 1000);
    
    // แสดงคำถามแรก
    showQuestion();
}

// ฟังก์ชันอัพเดทเวลา
function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        submitQuiz();
    } else {
        timeLeft--;
        
        // เปลี่ยนสีเมื่อเหลือเวลาไม่มาก
        if (timeLeft <= 600) { // 10 นาทีสุดท้าย
            timerElement.style.color = '#ff5252';
            timerElement.classList.add('pulse');
        }
    }
}

// ฟังก์ชันแสดงคำถาม
function showQuestion() {
    if (currentQuestion >= questions.length) {
        submitQuiz();
        return;
    }
    
    const question = questions[currentQuestion];
    
    let questionHTML = `
        <div class="question">
            <div class="question-number">คำถามที่ ${currentQuestion + 1}/${questions.length}</div>
            <div class="question-text">${question.question}</div>
            <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        const isChecked = userAnswers[currentQuestion] === index ? 'checked' : '';
        questionHTML += `
            <label class="option">
                <input type="radio" name="question${currentQuestion}" value="${index}" ${isChecked}>
                ${option}
            </label>
        `;
    });
    
    questionHTML += `
            </div>
        </div>
    `;
    
    questionsContainer.innerHTML = questionHTML;
    
    // เพิ่ม event listener สำหรับตัวเลือก
    document.querySelectorAll('.option input').forEach(input => {
        input.addEventListener('change', (e) => {
            userAnswers[currentQuestion] = parseInt(e.target.value);
        });
    });
    
    // แสดงปุ่มย้อนกลับ (ถ้าไม่ใช่คำถามแรก)
    if (currentQuestion > 0) {
        if (!document.getElementById('prevBtn')) {
            const prevBtn = document.createElement('button');
            prevBtn.id = 'prevBtn';
            prevBtn.className = 'btn';
            prevBtn.textContent = 'ย้อนกลับ';
            prevBtn.style.marginRight = '1rem';
            prevBtn.addEventListener('click', () => {
                currentQuestion--;
                showQuestion();
            });
            
            submitBtn.insertAdjacentElement('beforebegin', prevBtn);
        }
    } else {
        const prevBtn = document.getElementById('prevBtn');
        if (prevBtn) prevBtn.remove();
    }
    
    // แสดงปุ่มต่อไป (ถ้าไม่ใช่คำถามสุดท้าย)
    if (currentQuestion < questions.length - 1) {
        if (!document.getElementById('nextBtn')) {
            const nextBtn = document.createElement('button');
            nextBtn.id = 'nextBtn';
            nextBtn.className = 'btn';
            nextBtn.textContent = 'ต่อไป';
            nextBtn.addEventListener('click', () => {
                currentQuestion++;
                showQuestion();
            });
            
            submitBtn.insertAdjacentElement('beforebegin', nextBtn);
        }
    } else {
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) nextBtn.remove();
    }
}

// ฟังก์ชันส่งคำตอบ
function submitQuiz() {
    clearInterval(timer);
    
    // คำนวณคะแนน
    score = 0;
    let correctAnswersHTML = '<h3>คำตอบที่ถูกต้อง:</h3><ol>';
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
        
        // สร้างรายการคำตอบที่ถูกต้อง
        correctAnswersHTML += `
            <li>
                <strong>คำถาม:</strong> ${question.question}<br>
                <strong>คำตอบที่ถูกต้อง:</strong> ${question.options[question.answer]}<br>
                <strong>คำอธิบาย:</strong> ${question.explanation}<br><br>
            </li>
        `;
    });
    
    correctAnswersHTML += '</ol>';
    
    // แสดงผลลัพธ์
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    scoreElement.textContent = `${score}/${questions.length}`;
    progressBar.style.width = `${(score / questions.length) * 100}%`;
    
if (score >= 36) {
        feedbackElement.textContent = 'ไอ้เหี้ยพวกซุ่ม';
        feedbackElement.style.color = '#28a745';
    } else if (score >= 24) {
        feedbackElement.textContent = 'อ่านจังเลยนะมึงอ่านอีกอ่านเข้าไป';
        feedbackElement.style.color = '#4CAF50';
    } else if (score >= 12) {
        feedbackElement.textContent = 'มึงใช้สมองหรือร่องดากทำ';
        feedbackElement.style.color = '#FFC107';
    } else {
        feedbackElement.textContent = 'ฉลาดหรอวะ';
        feedbackElement.style.color = '#dc3545';
    }
    
    correctAnswersElement.innerHTML = correctAnswersHTML;
    
    // เลื่อนไปส่วนบนของหน้าเมื่อแสดงผลลัพธ์
    window.scrollTo(0, 0);
}

// ฟังก์ชันเริ่มทำแบบทดสอบใหม่
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    timeLeft = 3600;
    questions = [];
    userAnswers = [];
    
    resultContainer.style.display = 'none';
    startContainer.style.display = 'block';
    
    timerElement.textContent = '60:00';
    timerElement.style.color = '';
    timerElement.classList.remove('pulse');
    
    window.scrollTo(0, 0);
}
