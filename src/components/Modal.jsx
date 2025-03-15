function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)", 
        WebkitBackdropFilter: "blur(10px)", 
        backgroundColor: "rgba(255, 255, 255, 0.2)", 
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          padding: "1.5rem",
          color: "black",
          minWidth: "300px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            background: "none",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ❌
        </button>
        <div style={{ marginTop: "1rem" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;