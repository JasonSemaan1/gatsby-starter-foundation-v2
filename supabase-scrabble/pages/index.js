import styles from '../styles/Home.module.css'
import supabase from '../utils/supabase';

export async function getStaticProps() {
  const { data: scrabble_sql, error } = await supabase
  .from('scrabble_sql').select('Actual_Word', 'Value')

  if (error) {
      throw new Error(error);
  }
  
  return {
    props: {
    scrabble_sql,
    }
  };
}

export default function Home({ scrabble_sql }) {
  return (
    <div className={styles.container}>
      <h1>Hello world!</h1>
      <pre>{JSON.stringify(scrabble_sql, null, 2)}</pre>
    </div>
  );
}
