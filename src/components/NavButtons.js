import { useNavigate, useParams } from 'react-router-dom';
import { FaChevronCircleLeft, FaChevronCircleUp } from 'react-icons/fa';

export default function NavButtons() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="nav-buttons">
      <div
        onClick={() => {
          if (id) {
            navigate(-1);
          } else {
            navigate('/', {
              replace: true,
            });
          }
        }}
      >
        <FaChevronCircleLeft />
        Back
      </div>
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Top
        <FaChevronCircleUp />
      </div>
    </div>
  );
}
