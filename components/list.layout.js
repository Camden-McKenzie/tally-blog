import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'


export function postList(allPostsData) {
  return (
    allPostsData.map(({ id, date, title }) => (
      <li className={utilStyles.listItem} key={id}>
        {/* <div data-aos="fade" data-aos-easing="ease-in-quart" data-aos-offset="-20" data-aos-duration="500"> */}
        <div>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </div>
      </li>
    )))
}