export function getRol(): string {
    return (localStorage.getItem('rol') || '').toLowerCase();
}

export function esProfesor(): boolean {
    return getRol() === 'profesor';
}

export function esAlumno(): boolean {
    return getRol() === 'alumno';
}
