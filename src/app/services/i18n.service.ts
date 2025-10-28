import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Language {
    code: string;
    name: string;
    flag: string;
}

@Injectable({
    providedIn: 'root'
})
export class I18nService {
    private currentLanguageSubject = new BehaviorSubject<string>('es');
    public currentLanguage$ = this.currentLanguageSubject.asObservable();

    private readonly languages: Language[] = [
        { code: 'es', name: 'Español', flag: '🇲🇽' },
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
        { code: 'ko', name: '한국어', flag: '🇰🇷' },
    ];

    constructor(private translate: TranslateService) {
        this.initializeLanguage();
    }

    private initializeLanguage(): void {
        // Obtener idioma guardado en localStorage o usar español por defecto
        const savedLanguage = localStorage.getItem('portfolio-language') || 'es';
        this.setLanguage(savedLanguage);
    }

    getLanguages(): Language[] {
        return this.languages;
    }

    getCurrentLanguage(): string {
        return this.currentLanguageSubject.value;
    }

    setLanguage(languageCode: string): void {
        // console.log('I18nService: Intentando cambiar idioma a:', languageCode);
        // console.log('I18nService: Idiomas disponibles:', this.languages.map(l => l.code));

        if (this.languages.some((lang) => lang.code === languageCode)) {
            // console.log('I18nService: Idioma válido, aplicando cambio...');
            this.translate.use(languageCode);
            this.currentLanguageSubject.next(languageCode);
            localStorage.setItem('portfolio-language', languageCode);

            // Actualizar el atributo lang del HTML
            document.documentElement.lang = languageCode;

            // console.log('I18nService: Idioma cambiado exitosamente a:', languageCode);
            // console.log('I18nService: Idioma actual en localStorage:', localStorage.getItem('portfolio-language'));
        } else {
            // console.error('I18nService: Idioma no válido:', languageCode);
        }
    }

    translateKey(key: string, params?: any): Observable<string> {
        return this.translate.get(key, params);
    }

    translateKeySync(key: string, params?: any): string {
        return this.translate.instant(key, params);
    }

    // Método helper para obtener traducciones de forma síncrona
    t(key: string, params?: any): string {
        return this.translateKeySync(key, params);
    }
}
