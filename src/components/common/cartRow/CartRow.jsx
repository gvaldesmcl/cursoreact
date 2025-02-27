function CartRow({id,title,price,stock,category,description,imageUrl,quantity}) {
  return (
    <>
      <div className="row cart-item mb-3">
        <div className="col-md-3">
          <img
            src={imageUrl}
            alt="img producto"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-5">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">Categoria: {category}</p>
        </div>
        <div className="col-md-2">
          <div className="input-group">

            <input
              style={{ maxWidth: "100px" }}
              type="text"
              className="form-control  form-control-sm text-center quantity-input"
              value={quantity}
            />

          </div>
        </div>
        <div className="col-md-2 text-end">
          <p className="fw-bold">{new Intl.NumberFormat("es-CL", { style: "currency", currency: "USD" }).format(price*quantity)}</p>
          <button className="btn btn-sm btn-outline-danger">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
}

export default CartRow;
