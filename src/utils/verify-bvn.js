// const SECRET_KEY ="Bearer PAY_STACK_SECRET_KEY=sk_test_7f446f1a639c2e7b2139b8ea7f0cb20b396ded04";

export const VerifyBvn = async (url ,accountNumber, bvn, bankCode, setData) => {
    let request = {
        "bvn":bvn,
        "account_number":accountNumber,
        "bank_code":bankCode
    }
        try{
                let getData = await fetch (url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    Authorization:process.env.PAYSTACK_KEY,
                    body: JSON.stringify(request),
                    mode:"no-cors",
                }
            })
            let req = getData.json();
            setData(req.status)
            console.log("response from the external function");
            console.log(req);
            console.log(req.status);
}       
            catch(err){
            console.log("error from  verifyBvn (catch)");
            console.log(err);
}
  
}
