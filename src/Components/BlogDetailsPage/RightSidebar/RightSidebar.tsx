"use client";

const RightSidebar = () => {
  return (
    <>
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h6 className="card-title">Are you interested in a quoted project?</h6>
          <p className="card-text">
            Start with a UI/UX design and if we’re fit for your needs without any major commitment.
          </p>
          <a href="#" className="btn btn-success btn-sm">Get a Quote</a>
        </div>
      </div>

      <div className="card p-3">
        <h6 className="mb-2">More Tags</h6>
        <div>
          <span className="badge bg-primary me-2 mb-2">Technology</span>
          <span className="badge bg-secondary me-2 mb-2">Design</span>
          <span className="badge bg-warning text-dark me-2 mb-2">UI Design</span>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
