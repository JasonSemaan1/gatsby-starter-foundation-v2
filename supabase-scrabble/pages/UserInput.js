import supabase from "../utils/supabase";

export default function LoginPage() {
  async function handleSubmit(event) {
    event.preventDefault();

    const letters = event.target.letters.value;

    await supabase.auth.signIn({ letters });
  }

  return (
    <div>
    <h1>Enter letters here</h1>
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          <p>Letters</p>
          <input letters="letters" />
        </label>
      </fieldset>
      <button type ="submit">Submit</button>
    </form>
    </div>
  );
}
