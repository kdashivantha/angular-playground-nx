import { Directive, HostListener, HostBinding, ElementRef, Input, Output, EventEmitter } from '@angular/core';

/*
For me, the whole “editing” can boil down to two types of actions:
those which affect the content (typing, deleting, formatting, pasting, dragging),


*/


@Directive({
    selector: '[self-edit]'
})
export class SelfEditDirective {
    private _editActive: boolean = false;

    @Output() onBlurNote = new EventEmitter;
    
    constructor(private el: ElementRef) { }



    @HostBinding('class.active')
    public get active(): boolean {
        return this._editActive
    };

    @HostBinding('attr.contenteditable')
    public get contenteditable(): boolean {
        return this._editActive
    };
    
    @HostListener("click", ["$event"])
    clickEvent(event) {
        //event.preventDefault();
        event.stopPropagation();

        const activateCursor = this._editActive;
        if (!this._editActive)
            this._editActive = true;
        
        if (activateCursor !== this._editActive) {
            setTimeout(() => {
                this.el.nativeElement.focus();
                this.el.nativeElement.dispatchEvent(new MouseEvent(event));
            }, 50);
        }
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('#F9E9AE');
      }
    
      @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
      }
    
      private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('blur')
    public onBlur() {
        if (this._editActive) {
            this.onBlurNote.emit(this.el.nativeElement.innerHTML);
            alert(this.el.nativeElement.innerHTML);
        }
        this._editActive = false;
    }

    @HostListener('paste',["$event"])
    public onPaste(event) {
        event.preventDefault()
        const text = event.clipboardData.getData('text/plain');
        document.execCommand('insertText', false, text);
    }
}