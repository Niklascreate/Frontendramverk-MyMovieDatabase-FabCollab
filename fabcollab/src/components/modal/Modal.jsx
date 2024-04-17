import './modal.css'

function Modal({ movie, isOpen, closeModal }) {
    if (!isOpen || !movie) return null;

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <span className="modal-close" onClick={closeModal}>&times;</span>
                <h3 className='modal-heading'>{movie.title}</h3>
                <iframe 
                    src={movie.trailer_link} 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen 
                    title="Trailer"
                    width="100%"
                    height="400px"
                ></iframe>
            </div>
        </div>
    );
}

export default Modal;
