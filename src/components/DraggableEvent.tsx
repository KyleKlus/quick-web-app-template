// DraggableEvent.tsx
import React, { useEffect, useRef } from 'react';
import { Draggable } from '@fullcalendar/interaction';
import './DraggableEvent.css';
import { DateTime } from 'luxon';
import { getColorFromColorId } from './ColorSelector';
import { SimplifiedEvent } from '../handlers/eventConverters';

interface DraggableEventProps {
    eventTemplate: SimplifiedEvent;
    className?: string;
    isSelected?: boolean;
    onEditClick?: () => void;
    onTemplateClick?: () => void;
}

/**
 * DraggableEvent Component
 *
 * This component is responsible for rendering a draggable template.
 *
 * @param props
 * @returns JSX.Element
 */
const DraggableEvent: React.FC<DraggableEventProps> = ({ eventTemplate, onEditClick, onTemplateClick, className, isSelected }) => {
    const eventRef = useRef<HTMLDivElement>(null);
    const durationInMinutes = DateTime.fromISO(eventTemplate.end).diff(DateTime.fromISO(eventTemplate.start)).as('minutes');
    const durationInHours = Math.floor((durationInMinutes / 60) * 100) / 100;
    const durationInDays = Math.floor(durationInMinutes / 1440) + 1;

    const [isHovered, setIsHovered] = React.useState(false);

    useEffect(() => {
        const element = eventRef.current;

        if (element) {
            const draggable = new Draggable(element, {
                eventData: {
                    title: eventTemplate.title,
                    duration: { minutes: durationInMinutes },
                    allday: eventTemplate.allDay,
                    backgroundColor: getColorFromColorId(eventTemplate.colorId),
                    borderColor: getColorFromColorId(eventTemplate.colorId),
                    extendedProps: {
                        description: eventTemplate.description,
                    },
                },
            });

            return () => {
                draggable.destroy();
            };
        }
    }, [eventTemplate]);

    return (
        <div ref={eventRef}
            className={['draggable-event', 'fc-event', className, isSelected ? 'is-selected' : ''].join(' ')}
            style={{ backgroundColor: getColorFromColorId(eventTemplate.colorId) }}
            onClick={(e) => {
                e.stopPropagation();
                onTemplateClick && onTemplateClick()
            }}
            onMouseOver={() => { setIsHovered(true) }}
            onMouseOut={() => { setIsHovered(false) }}
        >
            <div className='duration'>{eventTemplate.allDay ? durationInDays + 'd' : durationInHours + 'h'}</div>
            <div className='title'>{eventTemplate.title}</div>
            {isHovered &&
                <button className='edit-template-button' onClick={(e) => {
                    e.stopPropagation();
                    onEditClick && onEditClick()
                }}>
                    <i className='bi-pencil-square' />
                </button>
            }
        </div>
    );
};

export default DraggableEvent;
