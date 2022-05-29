import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import {addOrders} from "../../api"

const OrderForm = () => {

  const products = useSelector((state) => state.Counter);

  const newProducts = products.filter((card) => {
    return card.qty > 0;
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      city: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const order = {
        ...values,
        items: newProducts,
      };
      console.log('res', order)
     const res = await addOrders(order)
      resetForm();
    },
    validationSchema: Yup.object({
      name: Yup.string().required("this input is required"),
      mobile: Yup.string().required("this input is required"),
      address: Yup.string().required("this input is required"),
      city: Yup.string().required("this input is required"),
    }),
  });

  return (
    <div className="orderForm">
      <form>
        <TextField
          error={!!formik.errors.name}
          helperText={formik.errors.name}
          id="name"
          name="name"
          margin="normal"
          fullWidth
          label="Name"
          variant="outlined"
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          error={!!formik.errors.mobile}
          helperText={formik.errors.mobile}
          id="mobile"
          name="mobile"
          margin="normal"
          fullWidth
          label="Mobile"
          variant="outlined"
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
          onChange={formik.handleChange}
        />
        <TextField
          error={!!formik.errors.address}
          helperText={formik.errors.address}
          id="address"
          name="address"
          margin="normal"
          fullWidth
          label="Address"
          variant="outlined"
          onBlur={formik.handleBlur}
          value={formik.values.address}
          onChange={formik.handleChange}
        />
        <TextField
          error={!!formik.errors.city}
          helperText={formik.errors.city}
          id="city"
          name="city"
          margin="normal"
          fullWidth
          label="City"
          variant="outlined"
          onBlur={formik.handleBlur}
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <Link to="/orderplaced">
          <Button
            onClick={formik.handleSubmit}
            sx={{
              backgroundColor: "#cd2f17",
              marginRight: "1rem",
              marginTop: "2rem",
            }}
            variant="contained"
          >
            Order Now
          </Button>
        </Link>
        <Link to="/">
          <Button
            sx={{ backgroundColor: "white", color: "black", marginTop: "2rem" }}
            variant="contained"
          >
            Cancel
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default OrderForm;
