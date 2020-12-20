import styles from "../styles/Study.module.scss";

export default function study() {
  return (
    <section className={styles.timeline}>
      <div className={styles.container}>
        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>
          <div className={styles.timeline_content}>
            <h2>Title</h2>
            <div className={styles.timeline_date}>1 MAY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content + " " + styles.timeline_card}>
            <div className={styles.timeline_img_header}>
              <h2>Card Title</h2>
            </div>
            <div className={styles.timeline_date}>25 MAY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content}>
            <div className={styles.timeline_date}>3 JUN 2016</div>
            <h2>Quote</h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              explicabo debitis omnis dolor iste fugit totam quasi inventore!
            </blockquote>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content}>
            <h2>Title</h2>
            <div className={styles.timeline_date}>22 JUN 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content + " " + styles.timeline_card}>
            <div className={styles.timeline_img_header}>
              <h2>Card Title</h2>
            </div>
            <div className={styles.timeline_date}>10 JULY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content + " " + styles.timeline_card}>
            <div className={styles.timeline_img_header}>
              <h2>Card Title</h2>
            </div>
            <div className={styles.timeline_date}>30 JULY 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content}>
            <div className={styles.timeline_date}>5 AUG 2016</div>
            <h2>Quote</h2>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              explicabo debitis omnis dolor iste fugit totam quasi inventore!
            </blockquote>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content + " " + styles.timeline_card}>
            <div className={styles.timeline_img_header}>
              <h2>Card Title</h2>
            </div>
            <div className={styles.timeline_date}>19 AUG 2016</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>

        <div className={styles.timeline_item}>
          <div className={styles.timeline_img}></div>

          <div className={styles.timeline_content}>
            <div className={styles.timeline_date}>1 SEP 2016</div>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed
              nulla voluptatem recusandae dolor, nostrum excepturi amet in
              dolores. Alias, ullam.
            </p>
            <a className={styles.bnt_more}>More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
