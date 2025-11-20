// Shared calculator theme styles for all method components
export const paperStyles = {
    p: 3,
    background: 'rgba(20, 24, 39, 0.6)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    boxShadow: '0 8px 32px rgba(0, 212, 255, 0.15)',
    animation: 'fadeInUp 0.5s ease-out'
};

export const titleStyles = {
    background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 600,
    mb: 3
};

export const textFieldStyles = {
    '& .MuiOutlinedInput-root': {
        backgroundColor: 'rgba(10, 14, 26, 0.5)',
        '& fieldset': { borderColor: 'var(--calc-border)' },
        '&:hover fieldset': { borderColor: 'var(--calc-border-hover)' },
        '&.Mui-focused fieldset': { borderColor: 'var(--calc-accent-primary)' },
    },
    '& .MuiInputLabel-root': { color: 'var(--calc-text-secondary)' },
    '& .MuiInputLabel-root.Mui-focused': { color: 'var(--calc-accent-primary)' },
};

export const buttonStyles = {
    background: 'linear-gradient(135deg, #00d4ff 0%, #b537ff 100%)',
    color: 'white',
    fontWeight: 600,
    py: 1.5,
    borderRadius: '12px',
    textTransform: 'none',
    fontSize: '1rem',
    boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
    '&:hover': {
        background: 'linear-gradient(135deg, #00b8e6 0%, #a030e6 100%)',
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 20px rgba(0, 212, 255, 0.4)',
    },
    transition: 'all 0.3s ease'
};

export const tableStyles = {
    '& .MuiTableCell-root': {
        color: 'var(--calc-text-primary)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& .MuiTableHead-root .MuiTableCell-root': {
        backgroundColor: 'rgba(0, 212, 255, 0.1)',
        fontWeight: 600,
        color: 'var(--calc-accent-primary)',
    },
    '& .MuiTableBody-root .MuiTableRow-root': {
        '&:nth-of-type(odd)': {
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
        },
        '&:hover': {
            backgroundColor: 'rgba(0, 212, 255, 0.05)',
        },
        transition: 'background-color 0.2s ease'
    }
};

export const resultStackStyles = {
    mt: 4,
    animation: 'fadeInUp 0.5s ease-out'
};

export const resultTitleStyles = {
    color: 'var(--calc-accent-primary)',
    fontWeight: 600,
    mb: 1
};

export const resultTextStyles = {
    color: 'var(--calc-text-secondary)'
};
