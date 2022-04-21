import styles from '../styles/Home.module.css'

export function getStaticProps() {
  return {
    props: {
    scrabble_sql: [],
    }
  }
}

export default function Home({ scrabble_sql }) {
  return (
    <div className={styles.container}>
      <h1>Hello world!</h1>
      <pre>{JSON.stringify(scrabble_sql, null, 2)}</pre>
    </div>
  );
}
