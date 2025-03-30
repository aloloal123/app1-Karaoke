import React, { useState } from 'react';

export default function Karaoke() {
  const [noCardHours, setNoCardHours] = useState('');
  const [hasCardHours, setHasCardHours] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [total, setTotal] = useState('');

  const handleCalculate = () => {
    if (selectedOption === 'ไม่มีบัตร' && (!noCardHours || isNaN(noCardHours))) {
      alert('กรุณากรอกจำนวนชั่วโมง');
      return;
    }
    if (selectedOption === 'มีบัตร' && (!hasCardHours || isNaN(hasCardHours))) {
      alert('กรุณากรอกจำนวนชั่วโมง');
      return;
    }
    
    let result = 0;
    if (selectedOption === 'ไม่มีบัตร') {
      result = parseInt(noCardHours || 0) * 120;
    } else if (selectedOption === 'มีบัตร') {
      result = parseInt(hasCardHours || 0) * 80;
    }
    setTotal(result);
  };

  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <table width="400" border="2" style={{ borderColor: '#000000' }}>
        <tbody>
          <tr>
            <td colSpan="2" id="karaokae">ร้านคาราโอเกะ</td>
          </tr>
          <tr>
            <td>
              <br />
              &nbsp;&nbsp;
              <input
                type="radio"
                name="c1"
                id="nohave"
                value="ไม่มีบัตร"
                checked={selectedOption === 'ไม่มีบัตร'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              ไม่มีบัตรนักศึกษา
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 120 บาท จำนวน
              <input
                type="text"
                size="2"
                id="txtqty1"
                value={noCardHours}
                onChange={(e) => setNoCardHours(e.target.value)}
              />{' '}
              ชั่วโมง
              <br />
              &nbsp;&nbsp;
              <input
                type="radio"
                name="c1"
                id="have"
                value="มีบัตร"
                checked={selectedOption === 'มีบัตร'}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              มีบัตรนักศึกษา
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ชั่วโมงละ 80 บาท จำนวน
              <input
                type="text"
                size="2"
                id="txtqty2"
                value={hasCardHours}
                onChange={(e) => setHasCardHours(e.target.value)}
              />{' '}
              ชั่วโมง
              <br />
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button onClick={handleCalculate}>คิดเงิน</button>
      <br />
      รวมเป็นเงินทั้งสิ้น ={' '}
      <input type="text" id="txtTotal" readOnly value={total} /> บาท
    </div>
  );
}
