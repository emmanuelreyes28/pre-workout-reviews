function Form() {
  return (
    <>
      <form>
        <label htmlFor="name">Pre-Workout Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="brand">Brand:</label>
        <input type="text" id="brand" name="brand" />
        <label htmlFor="benefits">Benefits:</label>
        <input type="text" id="benefits" name="benefits" />
        <label htmlFor="caffeine">Caffeine Per Serving:</label>
        <input type="number" id="caffeine" name="caffeine" />
        <input type="radio" id="openLabel" name="Open Label" />
        <label htmlFor="openLabel">Open Label</label>
        <input type="radio" id="proprietaryBlend" name="Proprietary Blend" />
        <label htmlFor="proprietaryBlend">Proprietary Blend</label>
      </form>
    </>
  );
}

export default Form;
