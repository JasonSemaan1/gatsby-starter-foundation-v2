import supabase from "../utils/supabase";

export async function getServerSideProps({ params }) {
  const { data: scrabble_sql, error } = await supabase
  .from('scrabble_sql')
  .select('*')
  .eq('Word_ID', params.Word_ID)
  .single();

  if (error) {
    console.log(error.message);
  }

return {
  props: {
    scrabble_sql,
    },
  };
}

export default function PostPage({ scrabble_sql = {} }) {
  return (
    <div>
    <h1>Playable words</h1>
    <p>{scrabble_sql.Actual_Word}</p>
    <p>Value = {scrabble_sql.Value}</p>
    </div>
  );
}
