import { useForm } from "react-hook-form";
import { Input, Select, Textarea } from "@chakra-ui/react";
import styles from "./ContactForm.module.scss";
import MainTitle from "components/MainTitle";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className={styles.contactform}>
      <div className={styles.info}>
        <h1>
          Please fill in the form aside and send us your questions, critics, and
          suggestions
        </h1>

        <div>
          <h4>Phone</h4>

          <h5>+55 113488 -734</h5>
        </div>

        <div>
          <h4>E-mail</h4>

          <h5>transceka@gmail.com</h5>
        </div>

        <div>
          <h4>Address</h4>

          <h5>Узбекистан, г. Ташкент, 100007, ул. Абдулла Каххар, 1a, 9-й </h5>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Input
          placeholder="Name"
          {...register("name")}
          variant="flushed"
          colorScheme="black"
          focusBorderColor="black"
          fontSize="16px"
          _placeholder={{ color: "black" }}
          zIndex="-1"
        />
        <Input
          placeholder="Email"
          {...register("email")}
          variant="flushed"
          focusBorderColor="black"
          fontSize="16px"
          _placeholder={{ color: "black" }}
          zIndex="-1"
        />
        <Input
          type="tel"
          placeholder="Phone"
          {...register("phone")}
          variant="flushed"
          focusBorderColor="black"
          fontSize="16px"
          _placeholder={{ color: "black" }}
          zIndex="-1"
        />

        <div className={styles.address}>
          <Select
            placeholder="Country"
            {...register("country")}
            variant="flushed"
            fontSize="16px"
            focusBorderColor="black"
          >
            <option value="uzb">Uzbekistan</option>
            <option value="rus">Russia</option>
            <option value="kaz">Kazakstan</option>
          </Select>

          <Select
            placeholder="City"
            {...register("city")}
            variant="flushed"
            fontSize="16px"
            focusBorderColor="black"
          >
            <option value="tashkent">Tashkent</option>
            <option value="nukus">Nukus</option>
            <option value="samarkand">Samarkand</option>
          </Select>
        </div>

        <Textarea
          placeholder="Messages"
          {...register("exampleRequired", { required: true })}
          variant="flushed"
          focusBorderColor="black"
          fontSize="16px"
          _placeholder={{ color: "black" }}
          zIndex="-1"
        />
        {errors.exampleRequired && <span>This field is required</span>}

        <div className={styles.submit}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
