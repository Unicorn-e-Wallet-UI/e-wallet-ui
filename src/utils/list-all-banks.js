
export const GETAPIDATA = async (url, method, setData) => {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        Authorization: process.env.PAYSTACK_KEY,
      },
    });
    const req = await res.json();
    console.log(req);
    setData( req.data);
  } catch (err) {
    console.error(err);
  }
};