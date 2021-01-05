import React from "react";
import Fade from "react-reveal/Fade";

import { InputText, InputFile } from "elements/Form";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = this.props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  const bank = [
    {
      img: "images/bank/bca.png",
      name: "Bank Central Asia",
      number: "1234 1234",
      owner: "Dani Edo",
    },
    {
      img: "images/bank/mandiri.png",
      name: "Bank Mandiri",
      number: "4321 4321 4321",
      owner: "Dani Edo",
    },
  ];

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              {bank.map((e, i) => {
                return (
                  <div className="row mt-4" key={i}>
                    <div className="col-3 text-right">
                      <img src={e.img} alt={e.name} width="60" />
                    </div>
                    <div className="col">
                      <dl>
                        <dd>{e.name}</dd>
                        <dd>{e.number}</dd>
                        <dd>{e.owner}</dd>
                      </dl>
                    </div>
                  </div>
                );
              })}
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText
                id="bankName"
                name="bankName"
                type="text"
                value={data.bankName}
                onChange={props.onChange}
              />

              <label htmlFor="bankHolder">Name Pengirim</label>
              <InputText
                id="bankHolder"
                name="bankHolder"
                type="text"
                value={data.bankHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
