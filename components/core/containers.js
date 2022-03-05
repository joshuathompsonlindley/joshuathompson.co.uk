export function FlexColumnContainer({ children }) {
    return (
        <div className="flex column container">
            {children}
        </div>
    )
}

export function FlexRowContainer({ className, children }) {
    return (
        <div className={`flex row container ${className}`}>
            {children}
        </div>
    )
}

export function PageContainer({ children }) {
    return (
        <div className="app container">
            {children}
        </div>
    )
}

export function HeadingContainer({ children }) {
    return (
        <FlexRowContainer className="heading spacing">
            {children}
        </FlexRowContainer>
    )
}

export function SubheadingContainer({ children }) {
    return (
        <div className="subheading spacing">
            {children}
        </div>
    )
}

export function BodyTextContainer({ children }) {
    return (
        <div className="bodytext spacing">
            {children}
        </div>
    )
}

export function SocialIconsContainer({ children }) {
    return (
        <FlexRowContainer className="no fw spacing">
            {children}
        </FlexRowContainer>
    )
}